declare let __DEV__: string;
declare let _VERSION_: string;
declare let NODE_ENV: string;

declare module '*.mp3' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

interface Window {
  AudioContext: typeof AudioContext;
  webkitAudioContext: typeof AudioContext;
}
