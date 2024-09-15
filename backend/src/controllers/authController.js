const { db, auth } = require('../config/firebase');
const jwt = require('jsonwebtoken');
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

require("dotenv").config();

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        await createUserWithEmailAndPassword(auth, email, password).then(() => console.log("signed up"));

        // // Save user to Firestore
        // await db.collection('users').doc(userRecord.user.uid).set({
        //     email: email,
        //     password: hashedPassword
        // });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)


    try {
        let token;
        await signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log("signed in")
            token = jwt.sign({ uid: user.user.uid }, process.env.JWT_SECRET, { expiresIn: '1h' });
        });

        res.status(200).json({ token });
    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Invalid credentials' });
    }
};
