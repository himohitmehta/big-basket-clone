const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	userRoles: {
		type: Array,
		required: true,
	},
});

// static signup method
userSchema.statics.signup = async function (email, password, userRoles) {
	// validation
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}
	if (!userRoles) {
		throw Error("User role not selected");
	}
	if (!userRoles.includes("admin") && !userRoles.includes("user")) {
		throw Error("User role not selected");
	}

	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already in use");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash, userRoles });

	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });
	if (!user) {
		throw Error("User not Found!");
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

module.exports = mongoose.model("User", userSchema);
