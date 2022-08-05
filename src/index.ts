/* eslint-disable unicorn/no-process-exit */
import {} from '.';

async function main() {
  console.log('HELLO WORLD');
}

void main()
  .catch((error) => console.error(error))
  .then(() => process.exit());
