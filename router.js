// ---------- Import ---------- //
const router = require("express").Router();
const lib = require("./scripts/lib");

// ------------------ Routes ------------------ //

// Route: /api/auth/signup (POST) - signup
router.post("/api/auth/signup", async (req, res) => {
    // Get user email and password
    let userEmail = req.body.email;
    let userPassword = req.body.password;

    // Call signup function from lib.js
    lib.signup(userEmail, userPassword).then((result) => {
        // Send result
        if (result.message) {
            res.send(result.message);
        } 
        else {
            res.send(result.error);
        }
    });
});

module.exports = router;