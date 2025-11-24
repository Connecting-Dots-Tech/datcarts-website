// Declares that any import ending in .css should be treated as a module
declare module "*.css" {
  const content: any;
  export default content;
}
