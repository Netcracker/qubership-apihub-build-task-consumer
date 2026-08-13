/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'

import { AppModule } from './app.module'

const BODY_LIMIT = '50mb'

async function bootstrap() {
  const port = process.env.port || 3000
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // Configured through Nest rather than by applying body-parser directly: `body-parser` is not a
  // declared dependency of this package (it only resolves because express hoists it), and adding a
  // parser via `app.use` leaves Nest's own default parser registered alongside it.
  app.useBodyParser('json', { limit: BODY_LIMIT })
  app.useBodyParser('urlencoded', { limit: BODY_LIMIT, extended: true })
  app.enableCors()

  await app.listen(port)
}
bootstrap()
