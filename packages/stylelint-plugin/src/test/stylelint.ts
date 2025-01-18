import type stylelint from 'stylelint';

function filterWarning(warning: stylelint.Warning) {
  return {
    column: warning.column,
    endColumn: warning.endColumn,
    endLine: warning.endLine,
    line: warning.line,
    rule: warning.rule,
    text: warning.text,
  };
}

function formatLintResult(lintResult: stylelint.LintResult, rootDir: string) {
  return {
    source: lintResult.source!.replace(rootDir, '<rootDir>').replace(/\\/gu, '/'),
    warnings: lintResult.warnings.map(filterWarning),
  };
}

export function formatLinterResult(linterResult: stylelint.LinterResult, rootDir: string) {
  return linterResult.results.map((result) => formatLintResult(result, rootDir));
}
