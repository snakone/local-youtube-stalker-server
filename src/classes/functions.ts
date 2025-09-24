import { getSubtitles, getVideoDetails } from "youtube-caption-extractor";

// Fetching Subtitles
export const fetchSubtitles = async (videoID: string, lang = 'en') => {
  try {
    const subTitles = await getSubtitles({ videoID, lang });
    return subTitles.map(sub => sub.text);
  } catch (error) {
    console.error('Error fetching subtitles:', error);
  }
};

export const fetchSubtitlesByTime = async (videoID: string, lang = 'en', time: string) => {
  try {
    const subtitles = await getSubtitles({ videoID, lang });
    const seconds = timeToSeconds(time);

    const filter = subtitles.filter(sub => {
      const range = parseFloat(sub.start) >= (seconds - 2.2) && 
                    parseFloat(sub.start) <= (seconds + 8.2);
      return range;
    });

    return filter.map(sub => sub.text);
  } catch (error) {
    console.error('Error fetching subtitles:', error);
  }
};

// Fetching Video Details
export const fetchVideoDetails = async (videoID: string, lang = 'en') => {
  try {
    return await getVideoDetails({ videoID, lang });
  } catch (error) {
    console.error('Error fetching video details:', error);
  }
};

function timeToSeconds(time: string): number {
    const parts = time.split('.').map(Number);
    let total = 0;

    if (parts.length === 2) {
        total = parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
        total = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else {
        throw new Error("Invalid Format. Use mm:ss or hh:mm:ss");
    }

    return total;
}