package android.guc.edu.hirewithoutborders;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.Volley;
import com.android.volley.VolleyLog;

import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {
    String localhost = "http://192.168.1.112:3333/api/";
    private RequestQueue mQueue;
    //Button button1 = findViewById(R.id.buttonlogin);
    TextView wrongpass;
    static String reply="";
    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mQueue = Volley.newRequestQueue(this);
//        button1.setOnClickListener(new View.OnClickListener() {
//            public void onClick(View v) {
//
//                jsonlogin(v);
//            }
//        });
    }




    public void jsonlogin(View view) {


        System.out.println("entered jsonlogin method");
        String url = localhost + "user/login";

        JSONObject jsonBody = new JSONObject();
        try {
            EditText email=findViewById(R.id.email);
            EditText password=findViewById(R.id.password);
            jsonBody.put("email", email.getText());
            jsonBody.put("password", password.getText());

        } catch (JSONException e) {
            e.printStackTrace();
        }
        final String requestBody = jsonBody.toString();

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST,
                url, null, new Response.Listener<JSONObject>(){
            @Override    public void onResponse(JSONObject response) {
                Log.i("Response",String.valueOf(response));

                try {
                    MainActivity.reply=response.getString("data");
                    System.out.println("RESPONSE::"+response.getString("data"));

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override    public void onErrorResponse(VolleyError error) {
                VolleyLog.e("Error: ", error.getMessage());
            }
        }){
            @Override    public Map<String, String> getHeaders() throws AuthFailureError {
                HashMap<String, String> headers = new HashMap<String, String>();
                headers.put("Content-Type", "application/json");
                return headers;
            }


            @Override    public byte[] getBody() {
                try {
                    return requestBody == null ? null : requestBody.getBytes("utf-8");
                } catch (UnsupportedEncodingException uee) {
                    VolleyLog.wtf("Unsupported Encoding while trying to get the bytes of %s using %s",
                            requestBody, "utf-8");
                    return null;
                }
            }



        };
        mQueue.add(jsonObjectRequest);

        if(reply.equals("logged in")){
            Intent i = new Intent(this,welcomepage.class);
            startActivity(i);
        }
        else{
            wrongpass=(TextView) findViewById(R.id.wrongpass);
            wrongpass.setText("Wrong email or password");
        }




    }

    public void jsonname(View view){
        String url = localhost + "user/getname";
        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONArray jsonArray = response.getJSONArray("data");

                            System.out.println(jsonArray);
//                            for (int i = 0; i < jsonArray.length(); i++) {
//                                JSONObject data = jsonArray.getJSONObject(i);
//
//                                String Name = data.getString("name");
//                            }
                            String Name = jsonArray.toString();
                            System.out.println(Name);
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });

        mQueue.add(request);
    }
}