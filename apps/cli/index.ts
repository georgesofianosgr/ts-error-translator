import * as path from 'path';

import {
  ErrorInfo,
  parseErrors,
  getImprovedMessageFromMarkdown,
} from '@total-typescript/error-translation-engine';

const input = process.argv[2];

const errors = parseErrors(input);
const improvedErrors = errors.map((error): ErrorInfo => {
  return {
    ...error,
    improvedError: getImprovedMessageFromMarkdown(
      path.resolve(process.cwd(), '../../packages/engine/errors'),
      error.code,
      error.parseInfo.items,
    ),
  };
});

console.log('Errors Parsed:', errors);
console.log('Errors Improved', improvedErrors);
