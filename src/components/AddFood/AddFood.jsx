import { ImagePlus, Upload, Check, Lightbulb, MessageCircle, Leaf, Smile, Heart, Star } from 'lucide-react'
import Button from '../Button/Button'
import RouterLink from '../RouterLink/RouterLink'
import Loading from '../Loading/Loading'
import { useState } from 'react'
import './AddFood.css'

const AddFood = () => {
    const [comment, setComment] = useState('')

    const commentLength = comment.length

    const handleCommentChange = (event) => {
        const currentComment = event.target.value
        
        setComment(currentComment)
    } 

    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (event) => {
      const file = event.target.files[0]

      if (!file) return
  
      setImage(file)

      const imageURL = URL.createObjectURL(file)

      setImagePreview(imageURL)
    }

    const [isLoading, setIsLoading] = useState(false)

    const handleAnalyzeFood = async () => {
      if (!image) {
        alert('Choose image first')
        return
      }

      const formData = new FormData()
      formData.append('image', image)
      formData.append('comment', comment)

      setIsLoading(true)

      try {
        const response = await fetch('http://localhost:3001/api/analyze-food', {
          method: 'POST',
          body: formData,
        })

        
        const result = await response.json()

        const newFoodCard = {
          id: crypto.randomUUID(),
          foodImg: result.foodImg,
          title: result.title,
          weight: result.weight,
          calories: result.calories,
          proteins: result.proteins,
          fats: result.fats,
          carbs: result.carbs,
          description: result.description,
          confidence: result.confidence
        }

        const savedCards = JSON.parse(localStorage.getItem('foodCards')) || []

        const updatedCards = [newFoodCard,...savedCards]

        localStorage.setItem('foodCards', JSON.stringify(updatedCards))
        

        console.log('RESULT:', result)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }


  return (
    <div className="add-food-page">

      {isLoading && ( <Loading /> )}

      <header className="add-food-page__header">
        <div className="add-food-page__header-left">

          <div>
            <h1 className="add-food-page__title">
              Add Photo & Comment
            </h1>
            <p className="add-food-page__subtitle">
              Add a photo of your meal and any additional details
            </p>
          </div>
        </div>

        <RouterLink to="/">
            <Button className="add-food-page__back-button">
              ←
            </Button>
          </RouterLink>
      </header>

      <main className="add-food-page__content">
        <section className="add-food-page__upload-section">
          
          <div className="upload-box">
            {imagePreview ? (
              <img
              className='upload-box__preview' 
              src={imagePreview}/>
            ) : (
              <>
                <div className="upload-box__icon">
                  <ImagePlus size={48} />
                  <span className="upload-box__plus">+</span>
                </div>

                <h2 className="upload-box__title">
                  Add a photo
                </h2>

                <p className="upload-box__text">
                  Drag and drop your photo here <br />
                  or click to <span>browse</span>
                </p>
              </>
            )}

            

            <label className="upload-box__button">
              <Upload size={18} />
              Choose from computer
              <input
                className="upload-box__input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <p className="upload-box__format">
            JPG, PNG, HEIC up to 10MB
          </p>
        </section>

        <section className="add-food-page__comment-section">
          <div className="comment-header">
            <MessageCircle size={24} />
            <div>
              <h2 className="comment-header__title">
                Add a comment <span>(optional)</span>
              </h2>
              <p className="comment-header__text">
                Share any additional information about your meal, ingredients,
                or how you felt.
              </p>
            </div>
          </div>

          <div className="comment-field">
            <textarea
              className="comment-field__textarea"
              placeholder="Write your comment here..."
              maxLength="500"
              value={comment}
              onChange={handleCommentChange}
            />
            <span className="comment-field__counter">
              {commentLength}/500
            </span>
          </div>

          <div className="tips-card">
            <h3 className="tips-card__title">
              You can write about:
            </h3>

            <ul className="tips-card__list">
              <li>
                <Leaf size={20} />
                Ingredients and portion size
              </li>
              <li>
                <Smile size={20} />
                How it was prepared
              </li>
              <li>
                <Heart size={20} />
                How you felt after the meal
              </li>
              <li>
                <Star size={20} />
                Anything else you want to remember
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="add-food-page__footer">
        <Button 
        className="add-food-page__save-button"
        onClick={handleAnalyzeFood}
        >
          <Check size={22} />
          Save Photo & Comment
        </Button>
      </footer>
    </div>
  )
}

export default AddFood