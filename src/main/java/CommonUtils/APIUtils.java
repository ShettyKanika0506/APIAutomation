package CommonUtils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Properties;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class APIUtils {
	
	private Properties properties;
	private final String propertyFilePath= ".\\resources\\configs\\Config.properties";
	HashMap<String, Object> credentials=new HashMap<String,Object>();
	
	
	public JSONObject readApi(String filename) throws IOException, ParseException
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\resources\\API\\"+filename);
		
		 Object obj=jsonparser.parse(reader);
		 JSONObject bookingjsonobj=(JSONObject) obj;
		 System.out.println("JSON Object for "+filename+":" +bookingjsonobj);
		 
		 return bookingjsonobj;
	}
	
	
	public void ConfigFileReader(){
		BufferedReader reader;
		try {
			reader = new BufferedReader(new FileReader(propertyFilePath));
			properties = new Properties();
			try {
				properties.load(reader);
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
		}		
	}
	
	public String getApplicationUrl() {
		String url = properties.getProperty("BASE_URL");
		if(url != null) return url;
		else throw new RuntimeException("url not specified in the Config.properties file.");
	}
	
	public HashMap<String, Object> getCredentials() {

		credentials.put("username",properties.getProperty("username"));
		credentials.put("password",properties.getProperty("password"));
		
		return credentials;

	}
	



	
}
