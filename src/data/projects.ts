export interface Project {
  title: string;
  description: string;
  appStoreUrl: string;
  screens: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    title: 'Air Conditioner Control',
    description:
      'Control your AC from anywhere with our Universal Remote. Turn it on/off, change settings, and set the perfect temperature—all from your phone.',
    appStoreUrl: 'https://itunes.apple.com/app/id6717596842',
    screens: [
      { src: '/assets/Conditioner/1.png', alt: 'Air Conditioner Control – Screen 1' },
      { src: '/assets/Conditioner/2.png', alt: 'Air Conditioner Control – Screen 2' },
      { src: '/assets/Conditioner/3.png', alt: 'Air Conditioner Control – Screen 3' },
      { src: '/assets/Conditioner/4.png', alt: 'Air Conditioner Control – Screen 4' },
    ],
  },
  {
    title: 'Authenticator – OTP',
    description:
      'The app generates time-based one-time passwords (TOTPs) for two-factor authentication (2FA), adding extra security to your accounts.',
    appStoreUrl: 'https://itunes.apple.com/app/id6736878953',
    screens: [
      { src: '/assets/AutoV2/1.png', alt: 'Authenticator – Screen 1' },
      { src: '/assets/AutoV2/2.png', alt: 'Authenticator – Screen 2' },
      { src: '/assets/AutoV2/3.png', alt: 'Authenticator – Screen 3' },
      { src: '/assets/AutoV2/4.png', alt: 'Authenticator – Screen 4' },
    ],
  },
  {
    title: 'Hidden Camera Detector',
    description:
      'The app protects your privacy by detecting hidden cameras via Bluetooth and Wi-Fi scans. It uses smart algorithms to alert you to potential threats.',
    appStoreUrl: 'https://itunes.apple.com/app/id6737825377',
    screens: [
      { src: '/assets/Detector/1.png', alt: 'Hidden Camera Detector – Screen 1' },
      { src: '/assets/Detector/2.png', alt: 'Hidden Camera Detector – Screen 2' },
      { src: '/assets/Detector/3.png', alt: 'Hidden Camera Detector – Screen 3' },
      { src: '/assets/Detector/4.png', alt: 'Hidden Camera Detector – Screen 4' },
    ],
  },
  {
    title: 'TV Remote Control',
    description:
      'This app lets you control your TV from your phone: switch channels, adjust volume, and use all remote functions wirelessly.',
    appStoreUrl: 'https://itunes.apple.com/app/id6739476184',
    screens: [
      { src: '/assets/TVRemoteApp/1.png', alt: 'TV Remote Control – Screen 1' },
      { src: '/assets/TVRemoteApp/2.png', alt: 'TV Remote Control – Screen 2' },
      { src: '/assets/TVRemoteApp/3.png', alt: 'TV Remote Control – Screen 3' },
      { src: '/assets/TVRemoteApp/4.png', alt: 'TV Remote Control – Screen 4' },
    ],
  },
  {
    title: 'Air Finder & Device Tracker',
    description:
      'Easily find and manage nearby Bluetooth devices with real-time scanning and detailed info. Stay in control of your Bluetooth environment.',
    appStoreUrl: 'https://itunes.apple.com/app/id6746399476',
    screens: [
      { src: '/assets/FindBT/1.png', alt: 'Air Finder – Screen 1' },
      { src: '/assets/FindBT/2.png', alt: 'Air Finder – Screen 2' },
      { src: '/assets/FindBT/3.png', alt: 'Air Finder – Screen 3' },
      { src: '/assets/FindBT/4.png', alt: 'Air Finder – Screen 4' },
    ],
  },
  {
    title: 'AI Translate',
    description:
      'Translate words using AI with clear explanations of their meaning. Understand not just the word, but how and when to use it.',
    appStoreUrl: 'https://itunes.apple.com/app/id6741454497',
    screens: [
      { src: '/assets/TranslateApp/1.png', alt: 'AI Translate – Screen 1' },
      { src: '/assets/TranslateApp/2.png', alt: 'AI Translate – Screen 2' },
      { src: '/assets/TranslateApp/3.png', alt: 'AI Translate – Screen 3' },
      { src: '/assets/TranslateApp/4.png', alt: 'AI Translate – Screen 4' },
    ],
  },
  {
    title: 'Screen Recorder',
    description:
      'Record your phone screen with microphone audio and easily edit the result. Perfect for tutorials, gameplay, and more.',
    appStoreUrl: 'https://itunes.apple.com/app/id6741609460',
    screens: [
      { src: '/assets/RecorderApp/1.png', alt: 'Screen Recorder – Screen 1' },
      { src: '/assets/RecorderApp/2.png', alt: 'Screen Recorder – Screen 2' },
      { src: '/assets/RecorderApp/3.png', alt: 'Screen Recorder – Screen 3' },
      { src: '/assets/RecorderApp/4.png', alt: 'Screen Recorder – Screen 4' },
    ],
  },
  {
    title: 'Offline Music Player',
    description:
      'Audio player for your own tracks — upload your music and listen offline anytime, anywhere. Simple, fast, and convenient.',
    appStoreUrl: 'https://itunes.apple.com/app/id6742508826',
    screens: [
      { src: '/assets/PlayerApp/1.png', alt: 'Offline Music Player – Screen 1' },
      { src: '/assets/PlayerApp/2.png', alt: 'Offline Music Player – Screen 2' },
      { src: '/assets/PlayerApp/3.png', alt: 'Offline Music Player – Screen 3' },
      { src: '/assets/PlayerApp/4.png', alt: 'Offline Music Player – Screen 4' },
    ],
  },
  {
    title: 'Pet Translator',
    description:
      'Interact with your dog or cat using fun sounds and tools. Keep a daily pet diary to track moments, moods, and milestones.',
    appStoreUrl: 'https://itunes.apple.com/app/id6744085873',
    screens: [
      { src: '/assets/PetsApp/1.png', alt: 'Pet Translator – Screen 1' },
      { src: '/assets/PetsApp/2.png', alt: 'Pet Translator – Screen 2' },
      { src: '/assets/PetsApp/3.png', alt: 'Pet Translator – Screen 3' },
      { src: '/assets/PetsApp/4.png', alt: 'Pet Translator – Screen 4' },
    ],
  },
  {
    title: 'Docs Sign',
    description:
      'Edit and sign PDF files right on your phone. Fill forms, add text or signatures, and manage documents with ease.',
    appStoreUrl: 'https://itunes.apple.com/app/id6503314530',
    screens: [
      { src: '/assets/PDFApp/1.png', alt: 'Docs Sign – Screen 1' },
      { src: '/assets/PDFApp/2.png', alt: 'Docs Sign – Screen 2' },
      { src: '/assets/PDFApp/3.png', alt: 'Docs Sign – Screen 3' },
      { src: '/assets/PDFApp/4.png', alt: 'Docs Sign – Screen 4' },
    ],
  },
  {
    title: 'Guitar Tuner',
    description:
      'Tune strings on any guitar type and detect notes by sound. Perfect tool for guitarists to tune and train their ear with ease.',
    appStoreUrl: 'https://itunes.apple.com/app/id6483909745',
    screens: [
      { src: '/assets/GuitarApp/1.png', alt: 'Guitar Tuner – Screen 1' },
      { src: '/assets/GuitarApp/2.png', alt: 'Guitar Tuner – Screen 2' },
      { src: '/assets/GuitarApp/3.png', alt: 'Guitar Tuner – Screen 3' },
      { src: '/assets/GuitarApp/4.png', alt: 'Guitar Tuner – Screen 4' },
    ],
  },
  {
    title: 'Auto Clicker',
    description:
      'Automate clicks and scrolling on websites. Save time and boost productivity with smart, customizable touch actions.',
    appStoreUrl: 'https://itunes.apple.com/app/id6737823971',
    screens: [
      { src: '/assets/AutoClickerApp/1.png', alt: 'Auto Clicker – Screen 1' },
      { src: '/assets/AutoClickerApp/2.png', alt: 'Auto Clicker – Screen 2' },
      { src: '/assets/AutoClickerApp/3.png', alt: 'Auto Clicker – Screen 3' },
      { src: '/assets/AutoClickerApp/4.png', alt: 'Auto Clicker – Screen 4' },
    ],
  },
];
