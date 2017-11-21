// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Static class to contain all the core constants.
 */
export class CoreConstants {
    public static secondsYear = 31536000;
    public static secondsDay = 86400;
    public static secondsHour = 3600;
    public static secondsMinute = 60;
    public static wifiDownloadThreshold = 104857600; // 100MB.
    public static downloadThreshold = 10485760; // 10MB.
    public static dontShowError = 'CoreDontShowError';
    public static noSiteId = 'NoSite';

    // Settings constants.
    public static settingsRichTextEditor = 'CoreSettingsRichTextEditor';
    public static settingsNotificationSound = 'CoreSettingsNotificationSound';
    public static settingsSyncOnlyOnWifi = 'mmCoreSyncOnlyOnWifi';

    // WS constants.
    public static wsTimeout = 30000;
    public static wsPrefix = 'local_mobile_';

    // Login constants.
    public static loginSSOCode = 2; // SSO in browser window is required.
    public static loginSSOInAppCode = 3; // SSO in embedded browser is required.
    public static loginLaunchData = 'mmLoginLaunchData';

    // Download status constants.
    public static downloaded = 'downloaded';
    public static downloading = 'downloading';
    public static notDownloaded = 'notdownloaded';
    public static outdated = 'outdated';
    public static notDownloadable = 'notdownloadable';
}
