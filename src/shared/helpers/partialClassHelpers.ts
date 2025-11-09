export function PartilaClass<T extends new (...args: any[]) => any>(Base: T) {
  class Partial extends Base {}

  return Partial as {
    new (): { [K in keyof InstanceType<T>]?: InstanceType<T>[K] };
  };
}
