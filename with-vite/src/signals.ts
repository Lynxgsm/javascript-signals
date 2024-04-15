export default function createSignal<T>(initialValue: T) {
  let _value = initialValue;
  let subscribers: ((value: T) => void)[] = [];

  function notify() {
    for (let subscriber of subscribers) {
      subscriber(_value);
    }
  }

  return {
    get value() {
      return _value;
    },
    set value(v) {
      _value = v;
      notify();
    },
    subscribe: (subscriber: (value: T) => void) => {
      subscribers.push(subscriber);
    },
  };
}
