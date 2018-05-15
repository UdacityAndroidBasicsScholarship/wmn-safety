package in.paperwrk.safetycollabproject.adapter;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.api.services.youtube.model.Video;
import com.google.api.services.youtube.model.VideoSnippet;
import com.squareup.picasso.Picasso;

import in.paperwrk.safetycollabproject.R;
import in.paperwrk.safetycollabproject.activities.PlayerActivity;
import in.paperwrk.safetycollabproject.fragments.ExploreFragment;
import in.paperwrk.safetycollabproject.models.PlaylistVideos;

public class PlaylistCardAdapter extends
        RecyclerView.Adapter<PlaylistCardAdapter.ViewHolder> {


    private final PlaylistVideos mPlaylistVideos;
    private final ExploreFragment.ItemReachedListener mListener;




    static class ViewHolder extends RecyclerView.ViewHolder {
        final Context mContext;
        final TextView mTitleText;
        final ImageView mThumbnailImage;

        ViewHolder(View v) {
            super(v);
            mContext = v.getContext();
            mTitleText =  v.findViewById(R.id.video_title);
            mThumbnailImage = v.findViewById(R.id.video_thumbnail);
        }
    }

    public PlaylistCardAdapter(PlaylistVideos playlistVideos, ExploreFragment.ItemReachedListener lastItemReachedListener) {
        mPlaylistVideos = playlistVideos;
        mListener = lastItemReachedListener;
    }


    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext()).inflate(R.layout.video_card, parent, false);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull final ViewHolder holder, final int position) {
        if (mPlaylistVideos.size() == 0) {
            return;
        }

        final Video video = mPlaylistVideos.get(position);
        final VideoSnippet videoSnippet = video.getSnippet();

        holder.mTitleText.setText(videoSnippet.getTitle());

        Picasso.with(holder.mContext)
                .load(videoSnippet.getThumbnails().getHigh().getUrl())
                .placeholder(R.drawable.video_placeholder)
                .into(holder.mThumbnailImage);

        holder.mThumbnailImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(view.getContext(),PlayerActivity.class);
                intent.putExtra("videoID",video.getId());
                holder.mContext.startActivity(intent);
            }
        });


        if (mListener != null) {
            final String nextPageToken = mPlaylistVideos.getNextPageToken();
            if (!isEmpty(nextPageToken) && position == mPlaylistVideos.size() - 1) {
                holder.itemView.post(new Runnable() {
                    @Override
                    public void run() {
                        mListener.onLastItem(holder.getAdapterPosition(), nextPageToken);
                    }
                });
            }
        }
    }


    @Override
    public int getItemCount() {
        return mPlaylistVideos.size();
    }

    private boolean isEmpty(String s) {
        return s == null || s.length() == 0;
    }

}
