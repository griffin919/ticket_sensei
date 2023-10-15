import { hostModel, guestModel } from "../../utils/dbUtils/models/models.js";

const registerHost = async (req, res) => {
    try {
        const { email } = req.body;
        const formTextData = req.body;
        const formFileData = req.files;

        const hostExists = await hostModel.findOne({ email });
        if (hostExists) {
            return res.status(400).json({ error: "An account with this email already exists" });
        }

        const fileNames = formFileData.map(file => file.filename);
        formTextData.portfolioFiles = fileNames;

        const host = await hostModel.create(formTextData);
        res.status(201).json(host);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

const registerGuest = async (req, res) => {
    try {
        const { email } = req.body;
        const formTextData = req.body;
        const formFileData = req.files;
        console.log('formFileData: ', formFileData);

        const guestExists = await guestModel.findOne({ email });
        if (guestExists) {
            return res.status(400).json({ error: "An account with this email already exists" });
        }

        // Handle profilePic (if it's a file)
        // if (formFileData && formFileData.profilePic) {
        //     formTextData.profilePic = formFileData.profilePic[0].filename;
        // }
        console.log('formTextData: ', formTextData);

        const guest = await guestModel.create(formTextData);
        res.status(201).json(guest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};


export { registerHost, registerGuest };
