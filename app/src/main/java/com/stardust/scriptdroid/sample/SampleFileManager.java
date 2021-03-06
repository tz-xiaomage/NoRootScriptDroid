package com.stardust.scriptdroid.sample;

import android.content.Context;
import android.content.res.AssetManager;

import com.stardust.scriptdroid.Pref;
import com.stardust.scriptdroid.droid.script.file.ScriptFile;
import com.stardust.scriptdroid.droid.script.file.ScriptFileList;
import com.stardust.scriptdroid.droid.script.file.SharedPrefScriptFileList;
import com.stardust.scriptdroid.tool.FileUtils;
import com.stardust.util.MapEntries;
import com.stardust.scriptdroid.App;
import com.stardust.scriptdroid.R;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Stardust on 2017/1/30.
 */
public class SampleFileManager {

    private static SampleFileManager instance = new SampleFileManager();

    public static SampleFileManager getInstance() {
        return instance;
    }

    private Context getContext() {
        return App.getApp();
    }

    public List<SampleGroup> getSamplesFromAssets(AssetManager assets, String path) {
        List<SampleGroup> sampleGroups = new ArrayList<>();
        try {
            String[] groups = assets.list(path);
            for (String groupName : groups) {
                sampleGroups.add(getSampleGroupFromAssets(assets, groupName, path + "/" + groupName));
            }
            return sampleGroups;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private SampleGroup getSampleGroupFromAssets(AssetManager assets, String groupName, String path) {
        SampleGroup group = new SampleGroup(groupName);
        try {
            String[] samples = assets.list(path);
            for (String sample : samples) {
                group.add(new Sample(FileUtils.getNameWithoutExtension(sample), path + "/" + sample));
            }
            return group;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
