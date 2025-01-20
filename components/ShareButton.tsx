import { Share2 } from "lucide-react";

interface ShareButtonProps {
      url: string;
      title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
      console.log(url, title, 'ur;l');
      const handleShare = async () => {
            if (navigator.share) {
                  try {
                        await navigator.share({
                              title,
                              text: `Check out this job opportunity: ${title}`,
                              url,
                        });
                  } catch (error) {
                        console.error("Error sharing:", error);
                  }
            } else {
                  // Fallback: Redirect to a generic sharing URL or log an error
                  window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              url
                        )}`,
                        "_blank"
                  );
            }
      };

      return (
            <button
                  onClick={handleShare}
                  className="flex items-center gap-2 p-2 border rounded-md hover:bg-gray-100"
            >
                  <Share2 className="w-4 h-4" />

            </button>
      );
};

export default ShareButton;
