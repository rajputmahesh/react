
/// <reference types="react" />
import React, { useRef } from "react";
// Ensure the automatic JSX runtime types are available
import 'react/jsx-runtime';
import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { DocumentEditorContainerComponent, Toolbar, Ribbon } from "@syncfusion/ej2-react-documenteditor";

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

registerLicense("YOUR LICENSE KEY HERE");
    
function App() {
  const container = useRef<DocumentEditorContainerComponent>(null);
  const tabAdded = useRef(false);

  const insertPlaceholder = (text: string) => {
    container.current?.documentEditor.editor.insertText(text);
  };

  const onCreated = () => {
    if (!container.current || tabAdded.current) {
      return;
    }

    tabAdded.current = true;

    const ribbonTab = {
      header: "NextGen Add-ins",
      id: "nextgen_addins",
      groups: [
        {
          header: "Student",
          id: "student_group",
          collections: [
            {
              items: [
                {
                  type: "Button",
                  buttonSettings: {
                    content: "Read Me",
                    clicked: () => insertPlaceholder("Dear Shreyash, I have added sample code where all the CSS formatting issues have been addressed. Please refer to this. We will hide the Developer Ribbon and provide all its features through our NextGen Add-ins Ribbon. Add your content control placeholder logic to the custom ribbon button click event."),
                  }
                },
                {
                  type: "Button",
                  buttonSettings: {
                    content: "Surname",
                    clicked: () => insertPlaceholder("<<Surname>>")
                  }
                },
                {
                  type: "Button",
                  buttonSettings: {
                    content: "Class",
                    clicked: () => insertPlaceholder("<<Class>>")
                  }
                }
              ]
            }
          ]
        }
      ]
    };

    container.current.ribbon.addTab(ribbonTab);
  };

  return (
    <div style={{ height: "100vh" }}>
      <DocumentEditorContainerComponent
        ref={container}
        id="container"
        created={onCreated}
        height="100%"
        toolbarMode="Ribbon"
        enableToolbar={true}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
      />
    </div>
  );
}

export default App;