import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem className="bg-red-300">
          <IonInput label="Usuario"></IonInput>
          
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
