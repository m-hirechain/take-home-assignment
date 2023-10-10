import { withFileUpload, getConfig } from 'next-multiparty';

export const config = getConfig();

const profilePictureUploadHandler = withFileUpload(async (req, res) => {
	// TODO: save file locally and serve the url back

	return res.status(201).json({
		imageUrl: 'pfp image url here',
	});
});

export default profilePictureUploadHandler;
