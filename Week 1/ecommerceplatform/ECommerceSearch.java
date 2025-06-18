package ecommerceplatform;
import java.util.Arrays;
import java.util.Scanner;

class Product implements Comparable<Product> {
    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public String getCategory() {
        return category;
    }

    @Override
    public String toString() {
        return "Product ID: " + productId + ", Name: " + productName + ", Category: " + category;
    }

    @Override
    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }
}

public class ECommerceSearch {

    public static Product linearSearch(Product[] products, int productId) {
        for (Product product : products) {
            if (product.getProductId() == productId) {
                return product;
            }
        }
        return null; 
    }

    public static Product binarySearch(Product[] products, int productId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (products[mid].getProductId() == productId) {
                return products[mid];
            } else if (products[mid].getProductId() < productId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null; 
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "T-shirt", "Apparel"),
            new Product(303, "Refrigerator", "Home Appliance"),
            new Product(150, "Mobile Phone", "Electronics"),
            new Product(420, "Microwave", "Home Appliance")
        };

        Product[] sortedProducts = products.clone();
        Arrays.sort(sortedProducts);

        System.out.print("Enter Product ID to search: ");
        int searchId = scanner.nextInt();

        System.out.println("\n--- Linear Search ---");
        long startLinear = System.nanoTime();
        Product linearResult = linearSearch(products, searchId);
        long endLinear = System.nanoTime();
        if (linearResult != null) {
            System.out.println("Product Found: " + linearResult);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + (endLinear - startLinear) + " nanoseconds");

        System.out.println("\n--- Binary Search ---");
        long startBinary = System.nanoTime();
        Product binaryResult = binarySearch(sortedProducts, searchId);
        long endBinary = System.nanoTime();
        if (binaryResult != null) {
            System.out.println("Product Found: " + binaryResult);
        } else {
            System.out.println("Product not found.");
        }
        System.out.println("Time taken: " + (endBinary - startBinary) + " nanoseconds");

        scanner.close();
    }
}
