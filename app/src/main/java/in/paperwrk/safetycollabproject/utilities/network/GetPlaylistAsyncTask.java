package in.paperwrk.safetycollabproject.utilities.network;

import android.os.AsyncTask;
import android.text.TextUtils;
import android.util.Log;
import android.util.Pair;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.PlaylistItem;
import com.google.api.services.youtube.model.PlaylistItemListResponse;
import com.google.api.services.youtube.model.Video;
import com.google.api.services.youtube.model.VideoListResponse;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import in.paperwrk.safetycollabproject.utilities.ApiKey;

public class GetPlaylistAsyncTask extends AsyncTask<String,Void, Pair<String,List<Video>>>{
    private static final String TAG = "GetPlaylistAsyncTask";
    private static final Long YOUTUBE_PLAYLIST_MAX_RESULTS = 10L;

    private static final String YOUTUBE_PLAYLIST_PART = "snippet";
    private static final String YOUTUBE_PLAYLIST_FIELDS = "pageInfo,nextPageToken,items(id,snippet(resourceId/videoId))";
    private static final String YOUTUBE_VIDEOS_PART = "snippet,contentDetails,statistics";
    private static final String YOUTUBE_VIDEOS_FIELDS = "items(id,snippet(title,description,thumbnails/high)," +
            "contentDetails/duration,statistics)";

    private YouTube mYouTubeDataApi;

    protected GetPlaylistAsyncTask(YouTube api) {
        mYouTubeDataApi = api;
    }



    @Override
    protected Pair<String, List<Video>> doInBackground(String... params) {
        final String playlistId = params[0];
        final String nextPageToken;

        if (params.length == 2) {
            nextPageToken = params[1];
        } else {
            nextPageToken = null;
        }

        PlaylistItemListResponse playlistItemListResponse;
        try {
            playlistItemListResponse = mYouTubeDataApi.playlistItems()
                    .list(YOUTUBE_PLAYLIST_PART)
                    .setPlaylistId(playlistId)
                    .setPageToken(nextPageToken)
                    .setFields(YOUTUBE_PLAYLIST_FIELDS)
                    .setMaxResults(YOUTUBE_PLAYLIST_MAX_RESULTS)
                    .setKey(ApiKey.YOUTUBE_API_KEY)
                    .execute();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }

        if (playlistItemListResponse == null) {
            Log.e(TAG, "Failed to get playlist");
            return null;
        }

        ArrayList<String> videoIds = new ArrayList<>();

        for (PlaylistItem item : playlistItemListResponse.getItems()) {
            videoIds.add(item.getSnippet().getResourceId().getVideoId());
        }

        // get details of the videos on this playlist page
        VideoListResponse videoListResponse = null;
        try {
            videoListResponse = mYouTubeDataApi.videos()
                    .list(YOUTUBE_VIDEOS_PART)
                    .setFields(YOUTUBE_VIDEOS_FIELDS)
                    .setKey(ApiKey.YOUTUBE_API_KEY)
                    .setId(TextUtils.join(",", videoIds)).execute();
        } catch (IOException e) {
            e.printStackTrace();
        }

        assert videoListResponse != null;
        return new Pair<>(playlistItemListResponse.getNextPageToken(), videoListResponse.getItems());
    }



}
