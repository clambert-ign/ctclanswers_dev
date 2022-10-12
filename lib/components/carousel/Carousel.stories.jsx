import CarouselComponent from "./Carousel"
import CarouselContent from "./CarouselContent"
import Button from '@atoms/button/Button'
import * as PrimaryButtonArgs from "@atoms/button/PrimaryButton.stories"
import * as SecondaryButtonArgs from "@atoms/button/SecondaryButton.stories"
import * as TertiaryButtonArgs from "@atoms/button/TertiaryButton.stories"
import AudioComponent from "@atoms/audio/Audio"
import * as AudioArgs from "@atoms/audio/Audio.stories"
import VideoComponent from "@atoms/video/Video"
import * as VideoArgs from "@atoms/video/Video.stories"
import ImageComponent from "@atoms/image/Image"
import * as ImageArgs from "@atoms/image/Image.stories"
import EditorialText from "@atoms/editorialText/EditorialText"
import * as EditorialTextArgs from "@atoms/editorialText/EditorialText.stories"
import Editorial from "@patterns/editorial/Editorial"
import * as EditorialArgs from "@patterns/editorial/Editorial.stories"
import ContentCardComponent from "@components/contentCard/ContentCard"
import ContentCardItem from "@components/contentCard/ContentCardItem"
import HeroHeaderComponent from "@components/heroHeader/HeroHeader"
import * as HeroHeaderArgs from "@components/heroHeader/HeroHeader.stories"

export default {
  title: "Components/In-page Navigation/Carousel",
  component: CarouselComponent,
  normalize: true,
  parameters: {
    docs: {
      description: {
        component: "Carousels allow the user to navigate between multiple pieces of content within a single component."
      }
    },
    cssprops: {
      "tab-text-colorr": {
        value: "#4B4C53",
        description: "Carousel Text Color"
      },
      "tab-headline-font-size": {
        value: "28px",
        description: "Carousel Headline Font Size",
        control: "text"
      },
      "tab-headline-font-weight": {
        value: "28px",
        description: "Carousel Headline Font Weight",
        control: "text"
      },
      "tab-headline-line-height": {
        value: "28px",
        description: "Carousel Headline Line Height",
        control: "text"
      },
      "tab-list-bgcolor": {
        value: "transparent",
        description: "Carousel Button Background Colour"
      },
      "tab-list-color": {
        value: "#4B4C53",
        description: "Carousel Button Text Colour"
      },
      "tab-list-border-color": {
        value: "#C3C4CA",
        description: "Carousel Button Border Colour"
      },
      "tab-list-hover-bgcolor": {
        value: "transparent",
        description: "Carousel Button Hover Background Colour"
      },
      "tab-list-hover-color": {
        value: "#6267A1",
        description: "Carousel Button Hover Text Colour"
      },
      "tab-list-hover-border-color": {
        value: "#C3C4CA",
        description: "Carousel Button Hover Border Colour"
      },
      "tab-list-active-bgcolor": {
        value: "#F5F5F6",
        description: "Carousel Button Active Background Colour"
      },
      "tab-list-active-color": {
        value: "#6267A1",
        description: "Carousel Button Active Text Colour"
      },
      "tab-list-active-border-color": {
        value: "#C3C4CA",
        description: "Carousel Button Active Border Colour"
      },
      "tab-list-selected-color": {
        value: "#6267A1",
        description: "Carousel Button Selected Text Colour"
      },
      "tab-list-selected-border-color": {
        value: "#6267A1",
        description: "Carousel Button Selected Border Colour"
      },
      "tab-list-scroll-left-bgcolor": {
        value: "#fff",
        description: "Carousel Button Scroll Left Background Colour"
      },
      "tab-list-scroll-left-color": {
        value: "#4B4C53",
        description: "Carousel Button Scroll Left Colour"
      },
      "tab-list-scroll-right-bgcolor": {
        value: "#fff",
        description: "Carousel Button Scroll Right Background Colour"
      },
      "tab-list-scroll-right-color": {
        value: "#4B4C53",
        description: "Carousel Button Scroll Right Colour"
      }
    }
  },
  args: {
    heading: '',
    headingTag: 'h2',
    displayCount: 1,
    navigationStyle: 'bottom'
  },
  argTypes: {
    heading: {
      description: "The heading of the component to be displayed",
      type: { 
        name: 'string'
      },
      control: false,
      table: {}
    },
    headingTag: {
      description: 'The heading tag to wrap around the component heading.',
      type: { 
        name: 'enum'
      },
      control: false,
      table: {}
    },
    displayCount: {
      description: 'The number of carousel items to display on screen at any one time.',
      type: { 
        name: 'number' 
      },
      control: false,
      table: {}
    },
    navigationStyle: {
      description: 'The type of style to apply to the Carousel navigation menu.',
      options: ['bottom', 'middle', 'top'],
      type: { 
        name: 'enum'
      },
      control: false,
      table: {}
    }
  }
}

const TemplateVideo = (args) => {
  return (
    <>
      <CarouselComponent {...args} heading="Video Carousel">
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 1" />
        </CarouselContent>
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 2" />
        </CarouselContent>
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 3" />
        </CarouselContent>
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 4" />
        </CarouselContent>
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 5" />
        </CarouselContent>
        <CarouselContent>
          <VideoComponent {...VideoArgs.Video.args} title="Video Carousel Slide 6" />
        </CarouselContent>
      </CarouselComponent>
    </>    
  )
}

export const Video = TemplateVideo.bind()
Video.args = {
  heading: 'Video Carousel',
  headingTag: 'h2',
  displayCount: 1
}

const TemplateAudio = (args) => {
  return (
    <>
      <CarouselComponent {...args} heading="Audio Carousel">
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 1" />
        </CarouselContent>
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 2" />
        </CarouselContent>
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 3" />
        </CarouselContent>
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 4" />
        </CarouselContent>
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 5" />
        </CarouselContent>
        <CarouselContent>
          <AudioComponent {...AudioArgs.Audio.args} title="Audio Carousel Slide 6" />
        </CarouselContent>
      </CarouselComponent>
    </>
  )
}

export const Audio = TemplateAudio.bind()
Audio.args = {
  heading: 'Audio Carousel',
  headingTag: 'h2',
  displayCount: 1
}

const TemplateImage = (args) => {
  return (
    <>
      <CarouselComponent {...args} heading="Image Carousel">
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 1" />
        </CarouselContent>
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 2" />
        </CarouselContent>
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 3" />
        </CarouselContent>
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 4" />
        </CarouselContent>
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 5" />
        </CarouselContent>
        <CarouselContent>
          <ImageComponent {...ImageArgs.Image.args} title="Image Carousel Slide 6" />
        </CarouselContent>
      </CarouselComponent>
    </>
  )
}

export const Image = TemplateImage.bind()
Image.args = {
  heading: 'Image Carousel',
  headingTag: 'h2',
  displayCount: 1
}

const TemplateContentCard = (args) => {
  return (
    <>
      <CarouselComponent {...args} heading="Content Card Carousel">
        <CarouselContent>
          <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 1'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
        <CarouselContent>
        <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 2'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
        <CarouselContent>
        <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 3'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
        <CarouselContent>
        <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 4'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
        <CarouselContent>
        <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 5'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus.'
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
        <CarouselContent>
        <ContentCardComponent>
            <ContentCardItem 
              image='/images/_blue-orange.png'
              title='Content Cards 6'
              titleTag="h3"
              subtitle='Card Subtitle'
              subtitleTag="h4"
              label="Label text"
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu enim egestas convallis viverra posuere at urna integer vitae. Porttitor sit libero faucibus eu volutpat aliquet. Duis diam vestibulum vitae eu velit, curabitur volutpat rutrum faucibus. '
              imageAlign='left'
            >        
              <Button {...TertiaryButtonArgs.default.args} />
            </ContentCardItem>
          </ContentCardComponent>
        </CarouselContent>
      </CarouselComponent>
    </>
  )
}

export const ContentCard = TemplateContentCard.bind()
ContentCard.args = {
  heading: 'Content Card Carousel',
  headingTag: 'h2',
  displayCount: 1
}

const TemplateHeroHeader = (args) => {
  return (
    <>
      <CarouselComponent {...args} heading="Hero Header Carousel" navigationStyle="middle">
        <CarouselContent>
          <HeroHeaderComponent title="Hero Header Carousel Example" heading="This is a Heading" align="center" >
            <Button {...PrimaryButtonArgs.Default.args} />
            <Button {...SecondaryButtonArgs.Default.args} />
          </HeroHeaderComponent>
        </CarouselContent>
        <CarouselContent>
          <HeroHeaderComponent title="Hero Header Carousel Example" heading="This is a Heading" align="center" bgVideo={<VideoComponent src="/video/background-video-sample.mp4" autoPlay={true} isLooped={true} clickToPlay={false} showControls={false} />} >
            <Button {...PrimaryButtonArgs.Default.args} />
            <Button {...SecondaryButtonArgs.Default.args} />
          </HeroHeaderComponent>
        </CarouselContent>
        <CarouselContent>
          <HeroHeaderComponent title="Hero Header Carousel Example" heading="This is a Heading" align="left" >
            <Button {...PrimaryButtonArgs.Default.args} />
            <Button {...SecondaryButtonArgs.Default.args} />
          </HeroHeaderComponent>
        </CarouselContent>
        <CarouselContent>
          <HeroHeaderComponent title="Hero Header Carousel Example" heading="This is a Heading" align="center" bgImage={<ImageComponent src="/images/blue-orange-desktop.png" />} />
        </CarouselContent>
      </CarouselComponent>
    </>
  )
}

export const HeroHeader = TemplateHeroHeader.bind()
HeroHeader.args = {
  heading: 'Hero Header Carousel',
  headingTag: 'h2',
  displayCount: 1
}