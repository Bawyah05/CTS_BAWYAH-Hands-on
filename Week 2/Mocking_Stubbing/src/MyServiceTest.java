import static org.junit.Assert.*;
import org.junit.Test;

public class MyServiceTest {
    @Test
    public void testExternalApi() {
        ExternalApi mockApi = org.mockito.Mockito.mock(ExternalApi.class);
        org.mockito.Mockito.when(mockApi.getData()).thenReturn("Mock Data");
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
