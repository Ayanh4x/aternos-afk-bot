const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'gangstapvp.aternos.me',
    port: 52920,
    username: 'AFK_WalkerBot' // Change this if you want a different name
  });

  bot.on('spawn', () => {
    console.log('✅ Bot has joined the server.');

    // Random walking every 5 seconds
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, true);
      bot.setControlState('forward', true);

      // Walk forward for 1 to 3 seconds
      setTimeout(() => {
        bot.setControlState('forward', false);
      }, 1000 + Math.random() * 2000);
    }, 5000);
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => {
    console.log('⚠️ Error:', err);
  });
}

createBot();

