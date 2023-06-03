const si = require("systeminformation");


async function printSystemInfo(frequency: number) {
  while (true) {
    try {
      const osInfo = await si.osInfo();
      const cpuInfo = await si.cpu();
      const memInfo = await si.mem();
      const batteryInfo = await si.battery();

      console.log('Operating System:', osInfo.platform, osInfo.release);
      console.log('Architecture:', osInfo.arch);
      console.log('Current User Name:', osInfo.user);
      console.log('CPU Cores Models:', cpuInfo.cores.map((core) => core.model));
      console.log('CPU Temperature:', cpuInfo.main);
      console.log('Graphic Controllers:');
      console.log(cpuInfo.graphics);
      console.log('Total Memory:', formatBytes(memInfo.total));
      console.log('Used Memory:', formatBytes(memInfo.used));
      console.log('Free Memory:', formatBytes(memInfo.free));
      console.log('Battery Info:');
      console.log('Charging:', batteryInfo.ischarging);
      console.log('Percent:', batteryInfo.percent);
      console.log('Remaining Time:', batteryInfo.timeremaining);

      await delay(frequency * 1000); // Затримка у мілісекундах до наступного тика
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Отримання частоти в секундах з аргументів командного рядка
const frequency = parseInt(process.argv[2]);

if (isNaN(frequency) || frequency <= 0) {
  console.error('Please provide a valid positive frequency value in seconds.');
} else {
  printSystemInfo(frequency);
}
