"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_worker_1 = require("piper-js/web-worker");
const QmWorker = require("worker-loader?inline&fallback=false!./worker-server.js");
exports.createService = () => new web_worker_1.WebWorkerService(new QmWorker(), web_worker_1.countingIdProvider(0));
exports.default = exports.createService;
