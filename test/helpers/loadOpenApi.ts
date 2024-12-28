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

import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export const v1 = yaml.load(fs.readFileSync(path.join(__dirname, '../resources/openapi/v1.yml'), 'utf8'));
export const v2 = yaml.load(fs.readFileSync(path.join(__dirname, '../resources/openapi/v2.yml'), 'utf8'));
export const diff = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/openapi/v1v2diff.json'), 'utf8'));