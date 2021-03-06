package com.stardust.scriptdroid.droid.script;

import com.stardust.scriptdroid.App;
import com.stardust.scriptdroid.BuildConfig;
import com.stardust.scriptdroid.tool.FileUtils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Stardust on 2017/1/27.
 */

public abstract class JavaScriptEngine {

    private static JavaScriptEngine defaultEngine;

    public static JavaScriptEngine getDefault() {
        return defaultEngine;
    }

    public static void setDefault(JavaScriptEngine engine) {
        defaultEngine = engine;
    }

    Map<String, Object> mVariableMap = new HashMap<>();

    public abstract Object execute(String script);

    public void set(String varName, Object value) {
        mVariableMap.put(varName, value);
    }

    public abstract void removeAndDestroy();

    public abstract int stopAll();

    public abstract String[] getGlobalFunctions();

    static class Init {
        private static final String INIT_SCRIPT = readInitScript();

        private static String readInitScript() {
            try {
                return FileUtils.readString(App.getApp().getAssets().open("javasccript_engine_init.js"));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        static String getInitScript() {
            if (BuildConfig.DEBUG) {
                // 调试时不缓存INIT_SCRIPT否则修改javasccript_engine_init.js后不会更新
                return readInitScript();
            } else {
                return INIT_SCRIPT;
            }
        }
    }
}
