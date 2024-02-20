import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'gradle.sensordata',
  appName: 'gradle-sensordata',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
