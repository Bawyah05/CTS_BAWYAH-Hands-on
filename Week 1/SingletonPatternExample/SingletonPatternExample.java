package SingletonPatternExample;

class Logger {
    
    private static Logger instance;

    private Logger() {
        System.out.println("Logger initialized.");
    }

    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log message: " + message);
    }
}

public class SingletonPatternExample {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        System.out.println("Are logger1 and logger2 the same instance? " + (logger1 == logger2));

        logger1.log("Singleton pattern ensures only one instance.");
        logger2.log("This message is logged using the same Logger instance.");
    }
}

