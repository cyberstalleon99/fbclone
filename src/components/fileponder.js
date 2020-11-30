import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { FilePond, File, registerPlugin } from 'react-filepond';

import '../../node_modules/filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import '../../node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview);

function FilePondEr() {
    const [files, setFiles] = useState([])

    return (
        <div >
            <FilePond 
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            allowReorder={true}
            maxFiles={3}
            server="/api"
            name="files" 
            labelIdle='Tinnag your files or <span class="filepond--label-action">Browse</span>'


            />
            

        </div>

    
    );
    
}

const rootElement = document.getElementById("root");
export default FilePondEr;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FilePondEr />, rootElement);