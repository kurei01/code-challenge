# Improvements

## 1. Correct Filtering Logic:
### Fixed the logic in sortedBalances to properly filter and sort the balances based on priority and amount.

## 2. Use useMemo Efficiently:
### Separated the formatted balances into their own useMemo to avoid unnecessary calculations.

## 3. Explicit Types:
### Defined the type for blockchain in getPriority as string instead of any.
### Corrected Type Usage: Ensured type consistency between WalletBalance and FormattedWalletBalance.

## 4. Simplified and Efficient Sorting:
### Simplified the sorting comparison to make it more readable and efficient.

## 5. Fixed Dependencies for Memoization:
### Corrected the dependencies for useMemo to ensure that only relevant changes trigger recalculations.

### Proper Key Usage: Used balance.currency as a key instead of the index.
### The rows mapping uses formattedBalances instead sortedBalances
