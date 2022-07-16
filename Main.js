package robux.factory.com;

import androidx.appcompat.app.AppCompatActivity;
import androidx.annotation.*;
import androidx.appcompat.widget.Toolbar;
import androidx.coordinatorlayout.widget.CoordinatorLayout;
import com.google.android.material.appbar.AppBarLayout;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.appcompat.app.ActionBarDrawerToggle;
import android.widget.LinearLayout;
import android.app.*;
import android.os.*;
import android.view.*;
import android.view.View.*;
import android.widget.*;
import android.content.*;
import android.content.res.*;
import android.graphics.*;
import android.graphics.drawable.*;
import android.media.*;
import android.net.*;
import android.text.*;
import android.text.style.*;
import android.util.*;
import android.webkit.*;
import android.animation.*;
import android.view.animation.*;
import java.util.*;
import java.util.regex.*;
import java.text.*;
import org.json.*;
import java.util.HashMap;
import android.widget.TextView;
import android.widget.ImageView;
import java.util.Timer;
import java.util.TimerTask;
import android.os.Bundle;
import java.io.InputStream;
import android.content.Intent;
import android.net.Uri;
import android.view.View;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.shashank.sony.fancytoastlib.*;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.DialogFragment;


public class MainActivity extends  AppCompatActivity  { 
	
	private Timer _timer = new Timer();
	
	private Toolbar _toolbar;
	private AppBarLayout _app_bar;
	private CoordinatorLayout _coordinator;
	private DrawerLayout _drawer;
	private String fontName = "";
	private String typeace = "";
	private HashMap<String, Object> Map = new HashMap<>();
	private double Number = 0;
	private String priceE = "";
	private HashMap<String, Object> body = new HashMap<>();
	private HashMap<String, Object> Map2 = new HashMap<>();
	private HashMap<String, Object> Map3 = new HashMap<>();
	
	private LinearLayout linear1;
	private TextView textview2;
	private LinearLayout linear3;
	private LinearLayout linear2;
	private TextView textview1;
	private ImageView imageview1;
	private TextView textview3;
	private LinearLayout linear4;
	private LinearLayout _drawer_linear1;
	private LinearLayout _drawer_linear4;
	private LinearLayout _drawer_linear3;
	private LinearLayout _drawer_linear2;
	private LinearLayout _drawer_linear_exit;
	private ImageView _drawer_imageview1;
	private LinearLayout _drawer_linear5;
	private ImageView _drawer_close;
	private TextView _drawer_textview8;
	private LinearLayout _drawer_linear_home;
	private LinearLayout _drawer_linear_aboutapp;
	private LinearLayout _drawer_linear_about;
	private LinearLayout _drawer_linear_support;
	private LinearLayout _drawer_linear_rate;
	private LinearLayout _drawer_linear_other;
	private ImageView _drawer_home_img;
	private TextView _drawer_textview1;
	private ImageView _drawer_aboutapp_img;
	private TextView _drawer_textview2;
	private ImageView _drawer_about_img;
	private TextView _drawer_textview3;
	private ImageView _drawer_support_img;
	private TextView _drawer_textview4;
	private ImageView _drawer_rate_img;
	private TextView _drawer_textview6;
	private ImageView _drawer_other_img;
	private TextView _drawer_textview5;
	private ImageView _drawer_exit_img;
	private TextView _drawer_textview7;
	
	private RequestNetwork price;
	private RequestNetwork.RequestListener _price_request_listener;
	private AlertDialog d;
	private RequestNetwork update_price;
	private RequestNetwork.RequestListener _update_price_request_listener;
	private TimerTask t;
	private RequestNetwork price2;
	private RequestNetwork.RequestListener _price2_request_listener;
	private RequestNetwork update_coins;
	private RequestNetwork.RequestListener _update_coins_request_listener;
	private RequestNetwork remove_coins;
	private RequestNetwork.RequestListener _remove_coins_request_listener;
	private Intent i = new Intent();
	@Override
	protected void onCreate(Bundle _savedInstanceState) {
		super.onCreate(_savedInstanceState);
		setContentView(R.layout.main);
		initialize(_savedInstanceState);
		initializeLogic();
	}
	
	private void initialize(Bundle _savedInstanceState) {
		
		_app_bar = (AppBarLayout) findViewById(R.id._app_bar);
		_coordinator = (CoordinatorLayout) findViewById(R.id._coordinator);
		_toolbar = (Toolbar) findViewById(R.id._toolbar);
		setSupportActionBar(_toolbar);
		getSupportActionBar().setDisplayHomeAsUpEnabled(true);
		getSupportActionBar().setHomeButtonEnabled(true);
		_toolbar.setNavigationOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _v) {
				onBackPressed();
			}
		});
		_drawer = (DrawerLayout) findViewById(R.id._drawer);
		ActionBarDrawerToggle _toggle = new ActionBarDrawerToggle(MainActivity.this, _drawer, _toolbar, R.string.app_name, R.string.app_name);
		_drawer.addDrawerListener(_toggle);
		_toggle.syncState();
		
		LinearLayout _nav_view = (LinearLayout) findViewById(R.id._nav_view);
		
		linear1 = (LinearLayout) findViewById(R.id.linear1);
		textview2 = (TextView) findViewById(R.id.textview2);
		linear3 = (LinearLayout) findViewById(R.id.linear3);
		linear2 = (LinearLayout) findViewById(R.id.linear2);
		textview1 = (TextView) findViewById(R.id.textview1);
		imageview1 = (ImageView) findViewById(R.id.imageview1);
		textview3 = (TextView) findViewById(R.id.textview3);
		linear4 = (LinearLayout) findViewById(R.id.linear4);
		_drawer_linear1 = (LinearLayout) _nav_view.findViewById(R.id.linear1);
		_drawer_linear4 = (LinearLayout) _nav_view.findViewById(R.id.linear4);
		_drawer_linear3 = (LinearLayout) _nav_view.findViewById(R.id.linear3);
		_drawer_linear2 = (LinearLayout) _nav_view.findViewById(R.id.linear2);
		_drawer_linear_exit = (LinearLayout) _nav_view.findViewById(R.id.linear_exit);
		_drawer_imageview1 = (ImageView) _nav_view.findViewById(R.id.imageview1);
		_drawer_linear5 = (LinearLayout) _nav_view.findViewById(R.id.linear5);
		_drawer_close = (ImageView) _nav_view.findViewById(R.id.close);
		_drawer_textview8 = (TextView) _nav_view.findViewById(R.id.textview8);
		_drawer_linear_home = (LinearLayout) _nav_view.findViewById(R.id.linear_home);
		_drawer_linear_aboutapp = (LinearLayout) _nav_view.findViewById(R.id.linear_aboutapp);
		_drawer_linear_about = (LinearLayout) _nav_view.findViewById(R.id.linear_about);
		_drawer_linear_support = (LinearLayout) _nav_view.findViewById(R.id.linear_support);
		_drawer_linear_rate = (LinearLayout) _nav_view.findViewById(R.id.linear_rate);
		_drawer_linear_other = (LinearLayout) _nav_view.findViewById(R.id.linear_other);
		_drawer_home_img = (ImageView) _nav_view.findViewById(R.id.home_img);
		_drawer_textview1 = (TextView) _nav_view.findViewById(R.id.textview1);
		_drawer_aboutapp_img = (ImageView) _nav_view.findViewById(R.id.aboutapp_img);
		_drawer_textview2 = (TextView) _nav_view.findViewById(R.id.textview2);
		_drawer_about_img = (ImageView) _nav_view.findViewById(R.id.about_img);
		_drawer_textview3 = (TextView) _nav_view.findViewById(R.id.textview3);
		_drawer_support_img = (ImageView) _nav_view.findViewById(R.id.support_img);
		_drawer_textview4 = (TextView) _nav_view.findViewById(R.id.textview4);
		_drawer_rate_img = (ImageView) _nav_view.findViewById(R.id.rate_img);
		_drawer_textview6 = (TextView) _nav_view.findViewById(R.id.textview6);
		_drawer_other_img = (ImageView) _nav_view.findViewById(R.id.other_img);
		_drawer_textview5 = (TextView) _nav_view.findViewById(R.id.textview5);
		_drawer_exit_img = (ImageView) _nav_view.findViewById(R.id.exit_img);
		_drawer_textview7 = (TextView) _nav_view.findViewById(R.id.textview7);
		price = new RequestNetwork(this);
		update_price = new RequestNetwork(this);
		price2 = new RequestNetwork(this);
		update_coins = new RequestNetwork(this);
		remove_coins = new RequestNetwork(this);
		
		linear2.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.openDrawer(GravityCompat.START);
			}
		});
		
		_price_request_listener = new RequestNetwork.RequestListener() {
			@Override
			public void onResponse(String _param1, String _param2, HashMap<String, Object> _param3) {
				final String _tag = _param1;
				final String _response = _param2;
				final HashMap<String, Object> _responseHeaders = _param3;
				Map = new Gson().fromJson(_response, new TypeToken<HashMap<String, Object>>(){}.getType());
				Number = Double.parseDouble(Map.get("price").toString());
				priceE = String.valueOf((long)(Number));
			}
			
			@Override
			public void onErrorResponse(String _param1, String _param2) {
				final String _tag = _param1;
				final String _message = _param2;
				
			}
		};
		
		_update_price_request_listener = new RequestNetwork.RequestListener() {
			@Override
			public void onResponse(String _param1, String _param2, HashMap<String, Object> _param3) {
				final String _tag = _param1;
				final String _response = _param2;
				final HashMap<String, Object> _responseHeaders = _param3;
				
			}
			
			@Override
			public void onErrorResponse(String _param1, String _param2) {
				final String _tag = _param1;
				final String _message = _param2;
				
			}
		};
		
		_price2_request_listener = new RequestNetwork.RequestListener() {
			@Override
			public void onResponse(String _param1, String _param2, HashMap<String, Object> _param3) {
				final String _tag = _param1;
				final String _response = _param2;
				final HashMap<String, Object> _responseHeaders = _param3;
				Map = new Gson().fromJson(_response, new TypeToken<HashMap<String, Object>>(){}.getType());
				Number = Double.parseDouble(Map.get("price").toString());
				SketchwareUtil.showMessage(getApplicationContext(), String.valueOf((long)(Number)));
				priceE = String.valueOf((long)(Number));
			}
			
			@Override
			public void onErrorResponse(String _param1, String _param2) {
				final String _tag = _param1;
				final String _message = _param2;
				
			}
		};
		
		_update_coins_request_listener = new RequestNetwork.RequestListener() {
			@Override
			public void onResponse(String _param1, String _param2, HashMap<String, Object> _param3) {
				final String _tag = _param1;
				final String _response = _param2;
				final HashMap<String, Object> _responseHeaders = _param3;
				
			}
			
			@Override
			public void onErrorResponse(String _param1, String _param2) {
				final String _tag = _param1;
				final String _message = _param2;
				
			}
		};
		
		_remove_coins_request_listener = new RequestNetwork.RequestListener() {
			@Override
			public void onResponse(String _param1, String _param2, HashMap<String, Object> _param3) {
				final String _tag = _param1;
				final String _response = _param2;
				final HashMap<String, Object> _responseHeaders = _param3;
				
			}
			
			@Override
			public void onErrorResponse(String _param1, String _param2) {
				final String _tag = _param1;
				final String _message = _param2;
				
			}
		};
		
		_drawer_linear_exit.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				finishAffinity();
			}
		});
		
		_drawer_close.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				_drawer.closeDrawer(GravityCompat.START);
			}
		});
		
		_drawer_linear_home.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				
			}
		});
		
		_drawer_linear_aboutapp.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				price2.startRequestNetwork(RequestNetworkController.GET, "https://api.mongoose/connect/{db}/model/guildsData.com", "885836421900943420", _price2_request_listener);
			}
		});
		
		_drawer_linear_about.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog d = new AlertDialog.Builder(MainActivity.this).create();
				LayoutInflater dLI = getLayoutInflater();
				View dCV = (View) dLI.inflate(R.layout.price, null);
				d.setView(dCV);
				final Button B11 = (Button)
				dCV.findViewById(R.id.button1);
				final TextView T11 = (TextView)
				dCV.findViewById(R.id.textview3);
				final EditText E11 = (EditText)
				dCV.findViewById(R.id.edittext1);
				d.setCancelable(true);
				d.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
				E11.setText(priceE);
				B11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						if (E11.getText().toString().equals(priceE)) {
							
						}
						else {
							if (E11.getText().toString().equals("")) {
								
							}
							else {
								body = new HashMap<>();
								body.put("price", E11.getText().toString());
								Map2 = new Gson().fromJson(new Gson().toJson(body), new TypeToken<HashMap<String, Object>>(){}.getType());
								update_price.setParams(Map2, RequestNetworkController.REQUEST_BODY);
								Map3 = new HashMap<>();
								Map3.put("Content-type", "application/json");
								update_price.setHeaders(Map3);
								update_price.startRequestNetwork(RequestNetworkController.POST, "https://api.mongoose/connect/{db}/model/guildsData.com", "885836421900943420", _update_price_request_listener);
								FancyToast.makeText(MainActivity.this, "Successfully changed price to ".concat(E11.getText().toString()), FancyToast.LENGTH_LONG, FancyToast.SUCCESS, false).show();
								price.startRequestNetwork(RequestNetworkController.GET, "https://api.mongoose/connect/{db}/model/guildsData", "885836421900943420", _price_request_listener);
								d.dismiss();
							}
						}
					}
				});
				T11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						d.dismiss();
					}
				});
				_Card_View(B11, 30, "#5860F0", 0, 0, "#5860F0");
				d.show();
			}
		});
		
		_drawer_linear_support.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog d = new AlertDialog.Builder(MainActivity.this).create();
				LayoutInflater dLI = getLayoutInflater();
				View dCV = (View) dLI.inflate(R.layout.update_coins, null);
				d.setView(dCV);
				final Button B11 = (Button)
				dCV.findViewById(R.id.button1);
				final TextView T11 = (TextView)
				dCV.findViewById(R.id.textview3);
				final EditText E11 = (EditText)
				dCV.findViewById(R.id.edittext1);
				final EditText E12 = (EditText)
				dCV.findViewById(R.id.edittext2);
				d.setCancelable(true);
				d.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
				B11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						if (E11.getText().toString().equals("") || E12.getText().toString().equals("")) {
							
						}
						else {
							body = new HashMap<>();
							body.put("id", E12.getText().toString());
							body.put("amount", E11.getText().toString());
							Map2 = new Gson().fromJson(new Gson().toJson(body), new TypeToken<HashMap<String, Object>>(){}.getType());
							update_coins.setParams(Map2, RequestNetworkController.REQUEST_BODY);
							Map3 = new HashMap<>();
							Map3.put("Content-type", "application/json");
							update_coins.setHeaders(Map3);
							update_coins.startRequestNetwork(RequestNetworkController.POST, "https://api.mongoose/connect/{db}/model/usersData.com", "+", _update_coins_request_listener);
							FancyToast.makeText(MainActivity.this, "Successfully convert ".concat(E11.getText().toString().concat(" to ".concat(E12.getText().toString()))), FancyToast.LENGTH_LONG, FancyToast.SUCCESS, false).show();
							d.dismiss();
						}
					}
				});
				T11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						d.dismiss();
					}
				});
				_Card_View(B11, 30, "#5860F0", 0, 0, "#5860F0");
				d.show();
			}
		});
		
		_drawer_linear_rate.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				final AlertDialog d = new AlertDialog.Builder(MainActivity.this).create();
				LayoutInflater dLI = getLayoutInflater();
				View dCV = (View) dLI.inflate(R.layout.update_coins, null);
				d.setView(dCV);
				final Button B11 = (Button)
				dCV.findViewById(R.id.button1);
				final TextView T11 = (TextView)
				dCV.findViewById(R.id.textview3);
				final EditText E11 = (EditText)
				dCV.findViewById(R.id.edittext1);
				final EditText E12 = (EditText)
				dCV.findViewById(R.id.edittext2);
				d.setCancelable(true);
				d.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
				B11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						if (E11.getText().toString().equals("") || E12.getText().toString().equals("")) {
							
						}
						else {
							body = new HashMap<>();
							body.put("id", E12.getText().toString());
							body.put("amount", E11.getText().toString());
							Map2 = new Gson().fromJson(new Gson().toJson(body), new TypeToken<HashMap<String, Object>>(){}.getType());
							update_coins.setParams(Map2, RequestNetworkController.REQUEST_BODY);
							Map3 = new HashMap<>();
							Map3.put("Content-type", "application/json");
							update_coins.setHeaders(Map3);
							update_coins.startRequestNetwork(RequestNetworkController.POST, "https://api.mongoose/connect/{db}/model/usersData.com", "-", _update_coins_request_listener);
							FancyToast.makeText(MainActivity.this, "Successfully remove ".concat(E11.getText().toString().concat(" to ".concat(E12.getText().toString()))), FancyToast.LENGTH_LONG, FancyToast.SUCCESS, false).show();
							d.dismiss();
						}
					}
				});
				T11.setOnClickListener(new View.OnClickListener(){
					@Override
					public void onClick(View _view){
						d.dismiss();
					}
				});
				_Card_View(B11, 30, "#5860F0", 0, 0, "#5860F0");
				d.show();
			}
		});
		
		_drawer_linear_other.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View _view) {
				i.setClass(getApplicationContext(), LeaderboardActivity.class);
				startActivity(i);
			}
		});
	}
	
	private void initializeLogic() {
		textview2.setClickable(true);
		android.text.util.Linkify.addLinks(textview2, android.text.util.Linkify.ALL);
		textview2.setLinkTextColor(Color.parseColor("#2196F3"));
		textview2.setLinksClickable(true);
		price.startRequestNetwork(RequestNetworkController.GET, "https://api.mongoose/connect/{db}/model/guildsData.com", "885836421900943420", _price_request_listener);
		_Drawer_Ui();
		_OnCreate();
	}
	
	@Override
	protected void onActivityResult(int _requestCode, int _resultCode, Intent _data) {
		
		super.onActivityResult(_requestCode, _resultCode, _data);
		
		switch (_requestCode) {
			
			default:
			break;
		}
	}
	
	@Override
	public void onBackPressed() {
		if (_drawer.isDrawerOpen(GravityCompat.START)) {
			_drawer.closeDrawer(GravityCompat.START);
		}
		else {
			finishAffinity(); 
		}
	}
	public void _NavStatusBarColor (final String _color1, final String _color2) {
		if (Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP) {
			Window w = this.getWindow();	w.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);	w.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
			w.setStatusBarColor(Color.parseColor("#" + _color1.replace("#", "")));	w.setNavigationBarColor(Color.parseColor("#" + _color2.replace("#", "")));
		}
	}
	
	
	public void _exit (final View _view, final String _focus, final String _pressed, final double _round, final double _stroke, final String _strokeclr) {
		android.graphics.drawable.GradientDrawable GG = new android.graphics.drawable.GradientDrawable();
		GG.setColor(Color.parseColor(_focus));
		
		
		
		GG.setCornerRadii(new float[] { 0, 0, 100, 100, 100, 100, 0, 0 }); //LeftTop, //RightTop, //RightBottom, //LeftBottom,
		
		
		
		GG.setStroke((int) _stroke,
		Color.parseColor("#" + _strokeclr.replace("#", "")));
		android.graphics.drawable.RippleDrawable RE = new android.graphics.drawable.RippleDrawable(new android.content.res.ColorStateList(new int[][]{new int[]{}}, new int[]{ Color.parseColor(_pressed)}), GG, null);
		_view.setBackground(RE);
	}
	
	
	public void _RippleEffects (final String _color, final View _view) {
		android.content.res.ColorStateList clr = new android.content.res.ColorStateList(new int[][]{new int[]{}},new int[]{Color.parseColor(_color)});
		android.graphics.drawable.RippleDrawable ripdr = new android.graphics.drawable.RippleDrawable(clr, null, null);
		_view.setBackground(ripdr);
	}
	
	
	public void _ICC (final ImageView _img, final String _c1, final String _c2) {
		_img.setImageTintList(new android.content.res.ColorStateList(new int[][] {{-android.R.attr.state_pressed},{android.R.attr.state_pressed}},new int[]{Color.parseColor(_c1), Color.parseColor(_c2)}));
	}
	
	
	public void _RadiusGradient4 (final View _view, final String _color1, final String _color2, final double _lt, final double _rt, final double _rb, final double _lb, final double _border, final String _color3) {
		int[] colors = { Color.parseColor(_color1), Color.parseColor(_color2) }; android.graphics.drawable.GradientDrawable gd = new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM, colors);
		gd.setCornerRadii(new float[]{(int)_lt,(int)_lt,(int)_rt,(int)_rt,(int)_rb,(int)_rb,(int)_lb,(int)_lb});
		gd.setStroke((int) _border, Color.parseColor(_color3));
		_view.setBackground(gd);
	}
	
	
	public void _rippleRoundStroke (final View _view, final String _focus, final String _pressed, final double _round, final double _stroke, final String _strokeclr) {
		android.graphics.drawable.GradientDrawable GG = new android.graphics.drawable.GradientDrawable();
		GG.setColor(Color.parseColor(_focus));
		GG.setCornerRadius((float)_round);
		GG.setStroke((int) _stroke,
		Color.parseColor("#" + _strokeclr.replace("#", "")));
		android.graphics.drawable.RippleDrawable RE = new android.graphics.drawable.RippleDrawable(new android.content.res.ColorStateList(new int[][]{new int[]{}}, new int[]{ Color.parseColor(_pressed)}), GG, null);
		_view.setBackground(RE);
	}
	
	
	public void _Drawer_Ui () {
		final LinearLayout _nav_view = (LinearLayout) findViewById(R.id._nav_view); _nav_view.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(Color.TRANSPARENT));
		_RadiusGradient4(_drawer_linear1, "#ffffff", "#ffffff", 0, 100, 100, 0, 0, "#ffffff");  	
		_ICC(_drawer_close, "#615CB7", "#757575");
		_RippleEffects("#e0e0e0", _drawer_close);  	
		_ICC(_drawer_home_img, "#ffffff", "#f5f5f5");
		_RippleEffects("#e0e0e0", _drawer_home_img);
		_rippleRoundStroke(_drawer_linear_home, "#696BE6", "#f5f5f5", 15, 0, "#ffffff");  	
		_ICC(_drawer_aboutapp_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_aboutapp_img);
		_rippleRoundStroke(_drawer_linear_aboutapp, "#f5f5f5", "#e0e0e0", 15, 0, "#ffffff");  	
		_ICC(_drawer_about_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_about_img);
		_rippleRoundStroke(_drawer_linear_about, "#f5f5f5", "#e0e0e0", 15, 0, "#ffffff");  	
		_ICC(_drawer_support_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_support_img);
		_rippleRoundStroke(_drawer_linear_support, "#f5f5f5", "#e0e0e0", 15, 0, "#ffffff");  	
		_ICC(_drawer_other_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_other_img);
		_rippleRoundStroke(_drawer_linear_other, "#f5f5f5", "#e0e0e0", 15, 0, "#ffffff");  	
		_ICC(_drawer_rate_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_rate_img);
		_rippleRoundStroke(_drawer_linear_rate, "#f5f5f5", "#e0e0e0", 15, 0, "#ffffff");  	
		_ICC(_drawer_exit_img, "#CBD0DA", "#615CB7");
		_RippleEffects("#e0e0e0", _drawer_exit_img);
		_exit(_drawer_linear_exit, "#696BE6", "#f5f5f5", 0, 0, "#ffffff");
	}
	
	
	public void _OnCreate () {
		_changeActivityFont("product_sans_medium");
		_NavStatusBarColor("#FFFFFF", "#FFFFFF");
		_toolbar.setVisibility(View.GONE);
		imageview1.getDrawable(). setColorFilter(Color.parseColor("#fafafa"), PorterDuff.Mode.SRC_IN);
		_RippleEffects("#e0e0e0", imageview1);
		_rippleRoundStroke(linear2, "#696BE6", "#f5f5f5", 20, 0, "#ffffff");
	}
	
	
	public void _changeActivityFont (final String _fontname) {
		fontName = "fonts/".concat(_fontname.concat(".ttf"));
		overrideFonts(this,getWindow().getDecorView()); 
	} 
	private void overrideFonts(final android.content.Context context, final View v) {
		
		try {
			Typeface 
			typeace = Typeface.createFromAsset(getAssets(), fontName);;
			if ((v instanceof ViewGroup)) {
				ViewGroup vg = (ViewGroup) v;
				for (int i = 0;
				i < vg.getChildCount();
				i++) {
					View child = vg.getChildAt(i);
					overrideFonts(context, child);
				}
			}
			else {
				if ((v instanceof TextView)) {
					((TextView) v).setTypeface(typeace);
				}
				else {
					if ((v instanceof EditText )) {
						((EditText) v).setTypeface(typeace);
					}
					else {
						if ((v instanceof Button)) {
							((Button) v).setTypeface(typeace);
						}
					}
				}
			}
		}
		catch(Exception e)
		
		{
			SketchwareUtil.showMessage(getApplicationContext(), "Error Loading Font");
		};
	}
	
	
	public void _Card_View (final View _view, final double _cornerradius, final String _bgcolor, final double _elevation, final double _stroke, final String _strokecolor) {
		if (_stroke == 0) {
			android.graphics.drawable.GradientDrawable cv = new android.graphics.drawable.GradientDrawable(); 
			float cornerradius = (float) _cornerradius;
			cv.setCornerRadius(cornerradius);
			cv.setColor(Color.parseColor("#" + _bgcolor.replace("#", "")));
			_view.setBackground(cv);
			float elevation = (float) _elevation;
			_view.setElevation(elevation); 
		}
		else {
			android.graphics.drawable.GradientDrawable cv = new android.graphics.drawable.GradientDrawable(); 
			float cornerradius = (float) _cornerradius;
			cv.setStroke((int)_stroke, Color.parseColor("#" + _strokecolor.replace("#", "")));
			cv.setCornerRadius(cornerradius);
			cv.setColor(Color.parseColor("#" + _bgcolor.replace("#", "")));
			_view.setBackground(cv);
			float elevation = (float) _elevation;
			_view.setElevation(elevation);
		}
	}
	
	
	@Deprecated
	public void showMessage(String _s) {
		Toast.makeText(getApplicationContext(), _s, Toast.LENGTH_SHORT).show();
	}
	
	@Deprecated
	public int getLocationX(View _v) {
		int _location[] = new int[2];
		_v.getLocationInWindow(_location);
		return _location[0];
	}
	
	@Deprecated
	public int getLocationY(View _v) {
		int _location[] = new int[2];
		_v.getLocationInWindow(_location);
		return _location[1];
	}
	
	@Deprecated
	public int getRandom(int _min, int _max) {
		Random random = new Random();
		return random.nextInt(_max - _min + 1) + _min;
	}
	
	@Deprecated
	public ArrayList<Double> getCheckedItemPositionsToArray(ListView _list) {
		ArrayList<Double> _result = new ArrayList<Double>();
		SparseBooleanArray _arr = _list.getCheckedItemPositions();
		for (int _iIdx = 0; _iIdx < _arr.size(); _iIdx++) {
			if (_arr.valueAt(_iIdx))
			_result.add((double)_arr.keyAt(_iIdx));
		}
		return _result;
	}
	
	@Deprecated
	public float getDip(int _input){
		return TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, _input, getResources().getDisplayMetrics());
	}
	
	@Deprecated
	public int getDisplayWidthPixels(){
		return getResources().getDisplayMetrics().widthPixels;
	}
	
	@Deprecated
	public int getDisplayHeightPixels(){
		return getResources().getDisplayMetrics().heightPixels;
	}
	
}
