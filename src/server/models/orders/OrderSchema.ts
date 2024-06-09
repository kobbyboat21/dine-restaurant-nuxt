import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true
  },
  customerId: {
    type: Number,
    required: true
  },
  platformName: { type: String,
    required: true
  },
  orderItemsList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'OrderItem'
    }
  ],
  orderValue: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  timestamps: {
    placed: {
      type: Date,
      required: true
    },
    prepared: {
      type: Date
    },
    outForDelivery: {
      type: Date
    },
    delivered: {
      type: Date
    }
  },
  deliveryInfo: {
    name: {
      type: String,
      required: true
    },
    address: {
      street: {
        type: String,
        required: true
      },
      propertyNumber: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      region: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      zipCode: {
        type: String,
        required: true
      }
    }
  }
})

const Order = mongoose.model('Order', orderSchema)

export default Order
