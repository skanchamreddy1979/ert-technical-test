interface String {
  toBoolean(): boolean;
  isNullOrEmpty(): boolean;
}
String.prototype.toBoolean = function(): boolean {
  return !!+String(this);
};

String.prototype.isNullOrEmpty = function(): boolean {
  return (this === null || this.length === 0 || !this.trim());
};
