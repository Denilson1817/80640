package mx.uv;

import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;

public class Conexion {
    private static String url = "jdbc:mysql://127:0.0.1:3306/nombreBD";
    private static String DriverName = "com.mysql.jdbc.Driver";
    private static String username = "root";
    private static String password=""; 
    private static Connection connection = null; 
    
    public static Connection getConnection(){
        try{
            Class.forName(DriverName);
            connection = DriverManager.getConnection(url,username, password);
        }catch(SQLException e){
            System.out.println(e);
        }catch(ClassNotFoundException e){
            System.out.println("No encontro el driver");
        }
        return connection; 
    }
}
