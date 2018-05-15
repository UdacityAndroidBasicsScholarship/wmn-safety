package in.paperwrk.safetycollabproject.fragments;

import android.app.ProgressDialog;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Pair;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.Video;

import java.util.List;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.adapter.PlaylistCardAdapter;
import in.paperwrk.safetycollabproject.models.PlaylistVideos;
import in.paperwrk.safetycollabproject.utilities.network.GetPlaylistAsyncTask;

public class ExploreFragment extends Fragment {
    private static final String ARG_YOUTUBE_PLAYLIST_IDS = "YOUTUBE_PLAYLIST_IDS";

    private String[] mPlaylistIds;
    private RecyclerView mRecyclerView;
    private PlaylistVideos mPlaylistVideos;
    private PlaylistCardAdapter mPlaylistCardAdapter;
    private YouTube mYouTubeDataApi;
    private ProgressDialog progressBar;



    public static ExploreFragment newInstance(YouTube youTubeDataApi, String[] playlistIds) {
        ExploreFragment fragment = new ExploreFragment();
        Bundle args = new Bundle();
        args.putStringArray(ARG_YOUTUBE_PLAYLIST_IDS, playlistIds);
        fragment.setArguments(args);
        fragment.setYouTubeDataApi(youTubeDataApi);
        return fragment;
    }

    public ExploreFragment() {
        // Required empty public constructor
    }

    public void setYouTubeDataApi(YouTube api) {
        mYouTubeDataApi = api;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRetainInstance(true);
    }


    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        View rootView = inflater.inflate(R.layout.player_fragment, container, false);
        setHasOptionsMenu(true);

        mRecyclerView = rootView.findViewById(R.id.youtube_recycler_view);
        mRecyclerView.setHasFixedSize(true);

        RecyclerView.LayoutManager mLayoutManager = new LinearLayoutManager(getActivity());

        progressBar = new ProgressDialog(getContext());
        mRecyclerView.setLayoutManager(mLayoutManager);
        if (getArguments() != null) {
            mPlaylistIds = getArguments().getStringArray(ARG_YOUTUBE_PLAYLIST_IDS);
        }
        progressBar.setCanceledOnTouchOutside(false);
        return rootView;
    }



    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
        // if we have a playlist in our retained fragment, use it to populate the UI
        if (mPlaylistVideos != null) {
            // reload the UI with the existing playlist.  No need to fetch it again
            reloadUi(mPlaylistVideos, false);
        } else {
            mPlaylistVideos = new PlaylistVideos(mPlaylistIds[0]);
            reloadUi(mPlaylistVideos, true);
        }
    }


    private void reloadUi(final PlaylistVideos playlistVideos, boolean fetchPlaylist) {
        initCardAdapter(playlistVideos);
        if (fetchPlaylist) {
            new GetPlaylistAsyncTask(mYouTubeDataApi) {
                @Override
                protected void onPreExecute() {
                    super.onPreExecute();
                    showProgressDialog(true);
                }

                @Override
                public void onPostExecute(Pair<String, List<Video>> result) {
                    handleGetPlaylistResult(playlistVideos, result);
                    showProgressDialog(false);
                }
            }.execute(playlistVideos.playlistId, playlistVideos.getNextPageToken());
        }
    }

    private void initCardAdapter(final PlaylistVideos playlistVideos) {
        mPlaylistCardAdapter = new PlaylistCardAdapter(playlistVideos, new ItemReachedListener() {
            @Override
            public void onLastItem(int position, String nextPageToken) {
                new GetPlaylistAsyncTask(mYouTubeDataApi) {
                    @Override
                    public void onPostExecute(Pair<String, List<Video>> result) {
                        handleGetPlaylistResult(playlistVideos, result);
                    }}.execute(playlistVideos.playlistId, playlistVideos.getNextPageToken());}
        });
        mRecyclerView.setAdapter(mPlaylistCardAdapter);
    }

    private void handleGetPlaylistResult(PlaylistVideos playlistVideos, Pair<String, List<Video>> result) {
        if (result == null) return;
        final int positionStart = playlistVideos.size();
        playlistVideos.setNextPageToken(result.first);
        playlistVideos.addAll(result.second);
        mPlaylistCardAdapter.notifyItemRangeInserted(positionStart, result.second.size());
    }


    @Override
    public void onResume() {
        super.onResume();
    }

    private void showProgressDialog(Boolean shouldShould){
        if (shouldShould){
            progressBar.show();
        } else{
            progressBar.dismiss();
        }
    }

    public interface ItemReachedListener {
        void onLastItem(int position, String nextPageToken);
    }


}
