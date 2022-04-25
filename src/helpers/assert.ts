type AssertNonNullable = <T>(value: T) => asserts value is NonNullable<T>;

const assertIsDefined: AssertNonNullable = <T>(
  value: T,
): asserts value is NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(
      `Expected 'value' to be defined, but received null or undefined`,
    );
  }
};

export default assertIsDefined;
