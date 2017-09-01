import {
  WebWorkerService,
  countingIdProvider
} from 'piper-js/web-worker';
import * as QmWorker from 'worker-loader?inline&fallback=false!./worker-server.js';

export const createService = () => new WebWorkerService(
  new QmWorker(),
  countingIdProvider(0)
);

export default createService;