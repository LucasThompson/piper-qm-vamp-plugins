import {WebWorkerServer} from 'piper-js/web-worker';
import {EmscriptenSynchronousService, EmscriptenModule} from 'piper-js/Emscripten';
import * as QMVampPluginsModule from './QMVampPlugins.asm.umd';

new WebWorkerServer(
  self,
  () => new EmscriptenSynchronousService(QMVampPluginsModule())
);