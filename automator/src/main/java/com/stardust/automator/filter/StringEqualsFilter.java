package com.stardust.automator.filter;

import android.view.accessibility.AccessibilityNodeInfo;

/**
 * Created by Stardust on 2017/3/9.
 */

public class StringEqualsFilter extends DfsFilter {

    private String mText;
    private KeyGetter mKeyGetter;

    public StringEqualsFilter(String text, KeyGetter getter) {
        mText = text;
        mKeyGetter = getter;
    }

    @Override
    protected boolean isIncluded(AccessibilityNodeInfo nodeInfo) {
        String key = mKeyGetter.getKey(nodeInfo);
        if(key != null){
            return key.equals(mText);
        }
        return false;
    }
}
