package android.guc.edu.hirewithoutborders;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import com.android.volley.toolbox.Volley;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.JSONStringer;

public class welcomepage extends AppCompatActivity {

    String localhost="http://192.168.1.112:3333/api";
    private RequestQueue mQueue;
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activitywelcomepage);
    }

    public void jsonname(View view){
        String url = localhost + "user/getname";

        JsonObjectRequest request = new JsonObjectRequest(Request.Method.GET, url, null,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            JSONObject jsonObject = response.getJSONObject("data");

                            System.out.println(jsonObject.toString());
//                            for (int i = 0; i < jsonArray.length(); i++) {
//                                JSONObject data = jsonArray.getJSONObject(i);
//
//                                String Name = data.getString("name");
//                            }
                            //String Name = jsonArray.toString();

                            System.out.println("response"+response);
                            System.out.println(jsonObject.toString());
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
