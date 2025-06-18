
package financialforecasting;

public class FinancialForecasting {

    public static double calculateFutureValueRecursive(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValueRecursive(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static double calculateFutureValueOptimized(double presentValue, double growthRate, int years) {
        double[] memo = new double[years + 1];
        return calculateWithMemoization(presentValue, growthRate, years, memo);
    }

    private static double calculateWithMemoization(double presentValue, double growthRate, int years, double[] memo) {
        if (years == 0) {
            return presentValue;
        }
        if (memo[years] != 0) {
            return memo[years];
        }
        memo[years] = calculateWithMemoization(presentValue * (1 + growthRate), growthRate, years - 1, memo);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 1000;
        double growthRate = 0.05;
        int years = 10;

        double futureValueRecursive = calculateFutureValueRecursive(presentValue, growthRate, years);
        System.out.println("Future Value (Recursive): " + futureValueRecursive);

        double futureValueOptimized = calculateFutureValueOptimized(presentValue, growthRate, years);
        System.out.println("Future Value (Optimized): " + futureValueOptimized);
    }
}
