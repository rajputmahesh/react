
import React, { useRef } from "react";
import "./App.css";
import { registerLicense } from "@syncfusion/ej2-base";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Ribbon
} from "@syncfusion/ej2-react-documenteditor";

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

registerLicense("Add Your key here");

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
                    content: "Forename",
                    clicked: () => insertPlaceholder("<<Forename>>")
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