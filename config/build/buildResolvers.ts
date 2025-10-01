import { ResolveOptions } from "webpack";
export function buildResolvers(): ResolveOptions {
  return {
    //указываем типы файлов для которых не надо будет использовать расширение при импорте
    extensions: [".tsx", ".ts", ".js"],
  };
}
