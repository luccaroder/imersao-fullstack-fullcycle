import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}
bootstrap();

// run in terminal npm run start:dev -- --entryFile=repl
// Consegue por meio de linha de comando acessar as consultas
