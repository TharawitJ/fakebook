import type { RequestHandler } from "express";

export const register: RequestHandler = (req, res, next) => {res.send("register")};

export const login: RequestHandler = (req, res, next) => {res.send("login")};

export const getMe: RequestHandler = (req, res, next) => {res.send("getMe")};
